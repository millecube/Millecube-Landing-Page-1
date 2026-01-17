import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 p-10 bg-blue-700 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get Your Free Audit</h3>
              <p className="text-blue-100 mb-6">
                Let us perform a forensic health check on your ad account. We'll identify wasted budget and improved scaling opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                 <span className="text-xs text-blue-300 uppercase font-bold tracking-wider">Email</span>
                 <span className="text-lg font-medium">hello@millecube.com</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-xs text-blue-300 uppercase font-bold tracking-wider">Location</span>
                 <span className="text-lg font-medium">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-10 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-accent" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Application Received!</h4>
                <p className="text-gray-600">Our team will analyze your request and get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Business URL / Shopee Store</label>
                  <input required type="url" id="website" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="https://..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input required type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="+60 12..." />
                    </div>
                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Monthly Ad Budget</label>
                        <select id="budget" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors">
                            <option>RM 3k - 5k</option>
                            <option>RM 5k - 15k</option>
                            <option>RM 15k+</option>
                        </select>
                    </div>
                </div>

                <Button type="submit" fullWidth disabled={loading} className="flex items-center gap-2 justify-center">
                  {loading ? 'Submitting...' : (
                    <>
                      Schedule Account Audit <Send size={18} />
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-400">
                    No credit card required. Zero obligation.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};