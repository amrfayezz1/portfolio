import React from 'react';
import { FormField } from '../../types';
import './FormGroup.css';

interface FormGroupProps {
  field: FormField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ field, value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const renderInput = () => {
    if (field.type === 'textarea') {
      return (
        <textarea
          id={field.id}
          name={field.name}
          value={value}
          onChange={handleChange}
          required={field.required}
          rows={field.rows || 4}
          className={`form-input ${error ? 'form-input--error' : ''}`}
        />
      );
    }

    return (
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        value={value}
        onChange={handleChange}
        required={field.required}
        className={`form-input ${error ? 'form-input--error' : ''}`}
      />
    );
  };

  return (
    <div className="form-group">
      <label htmlFor={field.id} className="form-label">
        {field.label}
        {field.required && <span className="required">*</span>}
      </label>
      {renderInput()}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};