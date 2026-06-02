import React, { useState } from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LeadForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    facility: '',
    title: '',
    phone: '',
    email: '',
    challenge: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('form.err.name');
    if (!formData.facility.trim()) newErrors.facility = t('form.err.facility');
    if (!formData.title.trim()) newErrors.title = t('form.err.title');
    if (!formData.phone.trim()) {
      newErrors.phone = t('form.err.phone.req');
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = t('form.err.phone.val');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('form.err.email.req');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t('form.err.email.val');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="lead-form__success">
        <CheckCircle size={56} className="lead-form__success-icon" />
        <h3 className="lead-form__success-title">{t('form.success.title')}</h3>
        <p className="lead-form__success-text">
          {t('form.success.text')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="lead-form" noValidate>
      
      {/* Row 1: Name and Facility */}
      <div className="lead-form__row">
        {/* Name Input */}
        <div className="lead-form__field">
          <label htmlFor="name-input" className="lead-form__label">{t('form.name.label')}</label>
          <input 
            type="text" 
            id="name-input" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className={`lead-form__input ${errors.name ? 'lead-form__input--error' : ''}`}
            placeholder={t('form.name.placeholder')}
            required
          />
          {errors.name && <span className="lead-form__error-message">{errors.name}</span>}
        </div>

        {/* Facility Input */}
        <div className="lead-form__field">
          <label htmlFor="facility-input" className="lead-form__label">{t('form.facility.label')}</label>
          <input 
            type="text" 
            id="facility-input" 
            name="facility" 
            value={formData.facility}
            onChange={handleChange}
            className={`lead-form__input ${errors.facility ? 'lead-form__input--error' : ''}`}
            placeholder={t('form.facility.placeholder')}
            required
          />
          {errors.facility && <span className="lead-form__error-message">{errors.facility}</span>}
        </div>
      </div>

      {/* Row 2: Title and Phone */}
      <div className="lead-form__row">
        {/* Job Title Input */}
        <div className="lead-form__field">
          <label htmlFor="title-input" className="lead-form__label">{t('form.title.label')}</label>
          <input 
            type="text" 
            id="title-input" 
            name="title" 
            value={formData.title}
            onChange={handleChange}
            className={`lead-form__input ${errors.title ? 'lead-form__input--error' : ''}`}
            placeholder={t('form.title.placeholder')}
            required
          />
          {errors.title && <span className="lead-form__error-message">{errors.title}</span>}
        </div>

        {/* Phone Input */}
        <div className="lead-form__field">
          <label htmlFor="phone-input" className="lead-form__label">{t('form.phone.label')}</label>
          <input 
            type="tel" 
            id="phone-input" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            className={`lead-form__input ${errors.phone ? 'lead-form__input--error' : ''}`}
            placeholder="+218 91 1234567"
            dir="ltr"
            required
          />
          {errors.phone && <span className="lead-form__error-message">{errors.phone}</span>}
        </div>
      </div>

      {/* Email Input */}
      <div className="lead-form__field">
        <label htmlFor="email-input" className="lead-form__label">{t('form.email.label')}</label>
        <input 
          type="email" 
          id="email-input" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className={`lead-form__input ${errors.email ? 'lead-form__input--error' : ''}`}
          placeholder={t('form.email.placeholder')}
          required
        />
        {errors.email && <span className="lead-form__error-message">{errors.email}</span>}
      </div>

      {/* Main Challenge Textarea */}
      <div className="lead-form__field">
        <label htmlFor="challenge-input" className="lead-form__label">{t('form.challenge.label')}</label>
        <textarea 
          id="challenge-input" 
          name="challenge" 
          value={formData.challenge}
          onChange={handleChange}
          className="lead-form__input lead-form__input--textarea"
          placeholder={t('form.challenge.placeholder')}
          rows={2}
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        id="submit-lead-form"
        className="btn-primary lead-form__submit"
      >
        {t('form.submit')}
      </button>

      {/* Promise Note */}
      <div className="lead-form__promise">
        <ShieldCheck size={14} className="lead-form__promise-icon" />
        <span className="lead-form__promise-text">
          {t('form.promise')}
        </span>
      </div>

    </form>
  );
}
