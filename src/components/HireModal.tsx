import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Send, User, Building2, Mail, Briefcase, MessageSquare, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal = ({ isOpen, onClose }: HireModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    workType: "",
    budget: "",
    timeline: "",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Validate required fields - ALL fields are now required
      if (!formData.name.trim() || 
          !formData.email.trim() || 
          !formData.projectDescription.trim() ||
          !formData.workType.trim() ||
          !formData.budget.trim() ||
          !formData.timeline.trim()) {
        throw new Error('Please fill in all fields - all information is required');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // EmailJS configuration - Using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not properly configured. Please contact the administrator.');
      }

      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        company: formData.company,
        workType: formData.workType,
        budget: formData.budget,
        timeline: formData.timeline,
        projectDescription: formData.projectDescription,
        // to_email: 'connect@0xjames.me',
        // subject: `Hire Request from ${formData.name} - ${formData.workType}`,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
        });

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            company: "",
            email: "",
            workType: "",
            budget: "",
            timeline: "",
            projectDescription: "",
          });
          setSubmitStatus({ type: null, message: '' });
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again or contact me directly at connect@0xjames.me'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus({ type: null, message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide animate-fade-in-up">
        <div className="bg-card/30 backdrop-blur-glass border border-white/10 rounded-2xl p-6 shadow-elegant">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold font-inter">
                Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Tell me about your project and let's create something amazing. All fields are required.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="hover:bg-primary/10 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-xl border transition-all duration-300 ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}>
              <div className="flex items-start gap-3">
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-medium mb-1">
                    {submitStatus.type === 'success' ? 'Success!' : 'Error'}
                  </h4>
                  <p className="text-sm opacity-90">{submitStatus.message}</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2 text-sm font-medium">
                  <Building2 className="h-4 w-4 text-primary" />
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  required
                  className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4 text-primary" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
              />
            </div>

            {/* Work Type and Budget */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Briefcase className="h-4 w-4 text-primary" />
                  Type of Work
                </Label>
                <Select value={formData.workType} onValueChange={(value) => setFormData({ ...formData, workType: value })} required>
                  <SelectTrigger className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300">
                    <SelectValue placeholder="Select work type *" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/90 backdrop-blur-glass border-white/20">
                    <SelectItem value="freelance">Freelance Project</SelectItem>
                    <SelectItem value="fulltime">Full-time Position</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="contract">Contract Work</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="h-4 w-4 text-primary" />
                  Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })} required>
                  <SelectTrigger className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300">
                    <SelectValue placeholder="Project timeline *" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/90 backdrop-blur-glass border-white/20">
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                    <SelectItem value="2-3months">2-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6months+">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="flex items-center gap-2 text-sm font-medium">
                💰 Budget Range
              </Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })} required>
                <SelectTrigger className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300">
                  <SelectValue placeholder="Select budget range *" />
                </SelectTrigger>
                <SelectContent className="bg-card/90 backdrop-blur-glass border-white/20">
                  <SelectItem value="under-1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                  <SelectItem value="discuss">Let's discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="h-4 w-4 text-primary" />
                Project Description
              </Label>
              <Textarea
                id="description"
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Tell me about your project, requirements, and any specific technologies you'd like to use..."
                required
                rows={4}
                className="bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
