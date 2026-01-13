import { MessageSquare, Sparkles } from "lucide-react";

const NochatSelected = () => {
    return (
        <div className="w-full flex flex-1 flex-col items-center justify-center p-8 bg-gradient-to-br from-base-100 via-base-200/30 to-base-100 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-2xl text-center space-y-8 relative z-10">
                {/* Icon Display with Enhanced Animation */}
                <div className="flex justify-center gap-3 mb-8">
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                        
                        {/* Main Icon Container */}
                        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <MessageSquare className="w-10 h-10 text-primary drop-shadow-lg" strokeWidth={2}/>
                        </div>
                        
                        {/* Orbiting Accent Icons */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-secondary/30 animate-bounce">
                            <Sparkles className="w-4 h-4 text-secondary" strokeWidth={2.5}/>
                        </div>
                    </div>
                </div>

                {/* Welcome Text with Gradient */}
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Welcome to ChatsApp
                    </h2>
                    <p className="text-lg text-base-content/70 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        Select a conversation from the sidebar to start chatting with your friends
                    </p>
                </div>

                {/* Subtle CTA */}
                <p className="text-sm text-base-content/40 mt-8 animate-in fade-in duration-700 delay-200">
                    👈 Start by selecting a chat from the sidebar
                </p>
            </div>
        </div>
    );
};

export default NochatSelected;