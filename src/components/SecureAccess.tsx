import { Shield, FileText, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SecureAccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-accent/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="relative overflow-hidden backdrop-blur-sm bg-card/95 border-border/20 shadow-2xl animate-fade-in">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="relative p-8 text-center space-y-6">
            {/* Icon section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center animate-float">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full animate-pulse-glow" />
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-card-foreground tracking-tight">
                Secure Document Access
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You have been granted access to a protected document with end-to-end encryption
              </p>
            </div>

            {/* Document info */}
            <div className="bg-accent/50 backdrop-blur-sm rounded-lg p-4 space-y-3 border border-border/30">
              <div className="flex items-center justify-center gap-2 text-accent-foreground">
                <FileText className="w-4 h-4" />
                <span className="font-medium text-sm">Confidential Document</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span className="text-xs">End-to-end encrypted</span>
              </div>
            </div>

            {/* Access button */}
            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group"
              size="lg"
            >
              <span className="flex items-center gap-2">
                Access Document
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>

            {/* Security notice */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
              <h3 className="text-xs font-medium text-muted-foreground mb-2">
                Security Notice:
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This link will redirect you to a secure external location. Please ensure you're in a private environment before proceeding.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecureAccess;