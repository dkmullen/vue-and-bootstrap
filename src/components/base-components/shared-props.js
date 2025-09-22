export const commonProps = {
  label: String,
}
export const formFieldProps = {
  class: 'custom-form-field',
  label: { type: String },
  id: { type: String, default: '' },            // helpful for <label for="">
  name: { type: String, default: '' },
  required: { type: Boolean, default: true },
  disabled: {type: Boolean, default: false },
  readonly: {type: Boolean, default: false },
}
