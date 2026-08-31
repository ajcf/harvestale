#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

CONFIG_FILE="deploy.config.local"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "Missing $CONFIG_FILE." >&2
  echo "Copy deploy.config.example to $CONFIG_FILE and fill in your bucket name and distribution ID." >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$CONFIG_FILE"

: "${AWS_S3_BUCKET:?AWS_S3_BUCKET not set in $CONFIG_FILE}"
: "${AWS_CLOUDFRONT_DISTRIBUTION_ID:?AWS_CLOUDFRONT_DISTRIBUTION_ID not set in $CONFIG_FILE}"

if ! command -v aws >/dev/null 2>&1; then
  echo "AWS CLI not found." >&2
  echo "Install it, then run 'aws configure' to set up credentials:" >&2
  echo "  macOS (Homebrew): brew install awscli" >&2
  echo "  Other platforms:  https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" >&2
  exit 1
fi

PROFILE_FLAG=""
if [ -n "${AWS_PROFILE:-}" ]; then
  PROFILE_FLAG="--profile $AWS_PROFILE"
fi

echo "Building..."
npm run build

echo "Uploading build/ to s3://$AWS_S3_BUCKET ..."
aws s3 sync build/ "s3://$AWS_S3_BUCKET" --delete $PROFILE_FLAG

echo "Invalidating CloudFront distribution $AWS_CLOUDFRONT_DISTRIBUTION_ID ..."
aws cloudfront create-invalidation \
  --distribution-id "$AWS_CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/*" \
  $PROFILE_FLAG

echo "Deploy complete."
