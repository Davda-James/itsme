import { Button } from "@/components/ui/button";
import { CheckCircle, X, ExternalLink } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  discordInviteUrl: string;
}

const SuccessModal = ({ isOpen, onClose, discordInviteUrl }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-background/80 backdrop-blur-glass border border-white/10 shadow-elegant rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-150"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/50 backdrop-blur-sm border border-white/20 hover:bg-background/80 hover:border-white/30 focus:bg-background/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 focus:outline-none text-muted-foreground hover:text-foreground focus:text-foreground transition-all duration-300 flex items-center justify-center group hover:shadow-glow focus:shadow-glow"
        >
          <X className="h-5 w-5 group-hover:rotate-90 group-focus:rotate-90 transition-transform duration-300" />
        </button>
        
        {/* Success content */}
        <div className="text-center space-y-6 relative z-10">
          {/* Success icon with animation */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          {/* Success message */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-inter text-foreground">
              Message Sent Successfully! 🎉
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out! I've received your message and will get back to you soon.
            </p>
          </div>
          
          {/* Discord invite section */}
          <div className="bg-background/50 rounded-xl p-6 border border-white/10">
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Join our Discord!</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Want to chat more or stay updated? Join our Discord community!
              </p>
              <Button
                onClick={() => window.open(discordInviteUrl, '_blank')}
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 group"
              >
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
