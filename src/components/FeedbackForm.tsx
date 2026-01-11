import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_CKkU6Zyef01rL1dyKkhXIjfy63FTBolas-kjn0ZpgCsos5SuI73wTRaiu0tXbq2ddQ/exec";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const FeedbackForm = () => {
  const { theme, isDark } = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return undefined;

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return undefined;

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.trim().length > 500)
          return "Message must be less than 500 characters";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires this
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we can't read the response, so we assume success
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "Failed to send feedback. Please try again or contact me directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const getCharacterCount = () => {
    const length = formData.message.length;
    const max = 500;
    const percentage = (length / max) * 100;
    const isNearLimit = percentage > 80;

    return { length, max, isNearLimit };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className='max-w-2xl mx-auto mt-20 relative'
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-20 -right-20 w-64 h-64 ${theme.glow1} rounded-full blur-3xl pointer-events-none`}
      />

      <div
        className={`p-8 md:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl relative overflow-hidden ${
          isDark
            ? "bg-white/5 border-white/10"
            : "bg-white/80 border-slate-200 shadow-slate-300/50"
        }`}
      >
        {/* Corner accents */}
        <div
          className={`absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 rounded-tl-2xl ${theme.border}/20`}
        />
        <div
          className={`absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 rounded-br-2xl ${theme.border}/20`}
        />

        <div className='relative z-10'>
          {/* Header */}
          <div className='text-center mb-8'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.primary} text-3xl mb-4 shadow-xl`}
            >
              💬
            </motion.div>

            <h3
              className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Share Your{" "}
              <span
                className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
              >
                Feedback
              </span>
            </h3>

            <p className={`${isDark ? "text-gray-400" : "text-slate-600"}`}>
              Your feedback helps me grow professionally
            </p>
          </div>

          <AnimatePresence mode='wait'>
            {success ? (
              <motion.div
                key='success'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`text-center p-8 rounded-2xl border ${
                  isDark
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-green-100 border-green-300"
                }`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className='text-6xl mb-4'
                >
                  🎉
                </motion.div>
                <h4
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-green-400" : "text-green-700"
                  }`}
                >
                  Thank You!
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-slate-700"}`}>
                  Your feedback has been successfully submitted. I appreciate
                  you taking the time to share your thoughts!
                </p>

                <motion.button
                  onClick={() => setSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 px-6 py-2 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? "bg-green-500/20 hover:bg-green-500/30 text-green-400"
                      : "bg-green-200 hover:bg-green-300 text-green-700"
                  }`}
                >
                  Submit Another
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key='form'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border flex items-start gap-3 ${
                      isDark
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : "bg-red-100 border-red-300 text-red-700"
                    }`}
                  >
                    <span className='text-xl'>⚠️</span>
                    <p className='text-sm'>{error}</p>
                  </motion.div>
                )}

                {/* Name field */}
                <div>
                  <label
                    htmlFor='name'
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    Name <span className={theme.text}>*</span>
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='John Doe'
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/40"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-400 focus:bg-slate-50"
                    } ${
                      errors.name && touched.name ? "border-red-500/50" : ""
                    }`}
                  />
                  {errors.name && touched.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-2 text-sm flex items-center gap-2 ${
                        isDark ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      <span>⚠</span> {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor='email'
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    Email <span className={theme.text}>*</span>
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='john@example.com'
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/40"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-400 focus:bg-slate-50"
                    } ${
                      errors.email && touched.email ? "border-red-500/50" : ""
                    }`}
                  />
                  {errors.email && touched.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-2 text-sm flex items-center gap-2 ${
                        isDark ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      <span>⚠</span> {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <div className='flex items-center justify-between mb-2'>
                    <label
                      htmlFor='message'
                      className={`block text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-slate-700"
                      }`}
                    >
                      Message <span className={theme.text}>*</span>
                    </label>
                    <span
                      className={`text-xs ${
                        getCharacterCount().isNearLimit
                          ? isDark
                            ? "text-yellow-400"
                            : "text-yellow-600"
                          : isDark
                          ? "text-gray-500"
                          : "text-slate-500"
                      }`}
                    >
                      {getCharacterCount().length}/{getCharacterCount().max}
                    </span>
                  </div>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Share your thoughts, suggestions, or feedback...'
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                      isDark
                        ? "bg-black/30 border-white/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/40"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-400 focus:bg-slate-50"
                    } ${
                      errors.message && touched.message
                        ? "border-red-500/50"
                        : ""
                    }`}
                  />
                  {errors.message && touched.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-2 text-sm flex items-center gap-2 ${
                        isDark ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      <span>⚠</span> {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type='submit'
                  disabled={loading}
                  whileHover={loading ? {} : { scale: 1.02, y: -2 }}
                  whileTap={loading ? {} : { scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden shadow-lg ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : `bg-gradient-to-r ${theme.primary} hover:shadow-2xl ${theme.shadow}`
                  }`}
                >
                  {loading && (
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Feedback
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy note */}
                <p
                  className={`text-xs text-center ${
                    isDark ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  🔒 Your information is secure and will only be used to respond
                  to your feedback.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;
