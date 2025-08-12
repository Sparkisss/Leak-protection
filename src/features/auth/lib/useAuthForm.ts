import { useState } from 'react';

export const useAuthForm = (fields: { name: string }[]) => {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map(f => [f.name, '']))
  );

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(Object.fromEntries(fields.map(f => [f.name, ''])));
  };

  return { formData, handleChange, resetForm };
};
