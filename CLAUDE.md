# CLAUDE.md

## Deployment

Never run `scripts/deploy.sh` or otherwise deploy this site (S3 sync, CloudFront invalidation, etc.). Deploys are done manually by Amanda only. Building locally (`npm run build`) for verification is fine — just never push a build to S3 or invalidate CloudFront.
