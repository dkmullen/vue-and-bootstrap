export const commonProps = {
  label: String,
}
export const formFieldProps = {
  class: 'custom-form-field',
  label: String,
  id: String,
  placeholder: String,
  required: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
}
