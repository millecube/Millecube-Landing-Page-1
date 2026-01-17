import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle, Mail, Phone, Globe, Briefcase, User } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    website: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real application, this would send data to a backend endpoint
    // which handles sending the notification email to hello@millecube.com
    // and the auto-reply to the user.
    console.log("Form Data Submitted:", formData);
    console.log("Simulating email to hello@millecube.com");
    console.log(`Simulating auto-reply to ${formData.email}`);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 p-10 bg-blue-700 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-heading">Get Your Free Audit</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Let us perform a forensic health check on your ad account. We'll identify wasted budget and improved scaling opportunities.
              </p>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                 <div className="p-2 bg-blue-600 rounded-lg">
                    <Mail size={20} className="text-accent" />
                 </div>
                 <div className="flex flex-col">
                     <span className="text-xs text-blue-300 uppercase font-bold tracking-wider mb-1">Email Us</span>
                     <span className="text-lg font-medium">hello@millecube.com</span>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-2 bg-blue-600 rounded-lg">
                    <Globe size={20} className="text-accent" />
                 </div>
                 <div className="flex flex-col">
                     <span className="text-xs text-blue-300 uppercase font-bold tracking-wider mb-1">HQ Location</span>
                     <span className="text-lg font-medium">Kuala Lumpur, Malaysia</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-8 md:p-10 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border border-green-100 shadow-sm">
                  <CheckCircle className="text-accent" size={40} />
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">Application Received!</h4>
                    <p className="text-gray-500 max-w-sm mx-auto">
                        We've sent a confirmation email to <span className="text-gray-900 font-bold">{formData.email}</span>.
                    </p>
                    <p className="text-gray-500 mt-2 max-w-sm mx-auto text-sm">
                        Our team has been notified and will analyze your request. You can expect a personal response within 24 hours.
                    </p>
                </div>
                <Button 
                    onClick={() => {
                        setSubmitted(false); 
                        setFormData({...formData, name: '', email: '', phone: '', industry: '', website: ''});
                    }} 
                    variant="outline"
                    className="mt-4"
                >
                    Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                    <User size={14} className="text-primary"/> Full Name
                  </label>
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                            <Mail size={14} className="text-primary"/> Email Address
                        </label>
                        <input 
                            required 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                            placeholder="john@company.com" 
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                            <Phone size={14} className="text-primary"/> Phone
                        </label>
                        <input 
                            required 
                            type="tel" 
                            id="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                            placeholder="+60 12..." 
                        />
                    </div>
                </div>
                
                {/* Industry & Website Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="industry" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                            <Briefcase size={14} className="text-primary"/> Industry
                        </label>
                        <input 
                            required 
                            type="text" 
                            id="industry" 
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                            placeholder="e.g. Fashion" 
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                            <Globe size={14} className="text-primary"/> Business URL
                        </label>
                        <input 
                            required 
                            type="url" 
                            id="website" 
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                            placeholder="https://..." 
                        />
                    </div>
                </div>

                <div className="pt-2">
                    <Button type="submit" variant="bubble" fullWidth disabled={loading} className="flex items-center gap-2 justify-center py-4 text-lg shadow-lg hover:shadow-xl">
                    {loading ? 'Processing...' : (
                        <>
                        Schedule Account Audit <Send size={18} />
                        </>
                    )}
                    </Button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        By submitting, you agree to receive a confirmation email and follow-up from our team. Zero obligation.
                    </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};