export enum Inputs {
  Name = 'name',
  Path = 'path',
  IfNoFilesFound = 'if-no-files-found',
  RetentionDays = 'retention-days',
  S3Bucket = 's3-bucket',
  Region = 'region',
  AWSAccessKeyId = 'aws-access-key-id',
  AWSSecretAccessKey = 'aws-secret-access-key',

}

export enum NoFileOptions {
  /**
   * Default. Output a warning but do not fail the action
   */
  warn = 'warn',

  /**
   * Fail the action with an error message
   */
  error = 'error',

  /**
   * Do not output any warnings or errors, the action does not fail
   */
  ignore = 'ignore'
}
