python lambda ci/cd integration boilerplate

provides lambda, public url and attaches permission for public calls

needs repository secrets `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

needs repository variables

- `DEPLOY_BUCKET` for pre existing bucket where resources will be stored
- `DEPLOY_REGION` for setting region in which stack will be created
- `STACK_NAME` for naming the stack

trigger branch: `master`
