const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="space-y-4 mb-8">
          {/* Left messages */}
          <div className="flex justify-start">
            <div className="bg-primary/10 rounded-2xl rounded-bl-none p-4 max-w-[80%]">
              <div className="space-y-2">
                <div className="h-2 bg-primary/30 rounded w-32 animate-pulse" />
                <div className="h-2 bg-primary/20 rounded w-24 animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
          
          {/* Right messages */}
          <div className="flex justify-end">
            <div className="bg-primary/30 rounded-2xl rounded-br-none p-4 max-w-[80%]">
              <div className="space-y-2">
                <div className="h-2 bg-primary/50 rounded w-28 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="h-2 bg-primary/40 rounded w-20 animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
          
          {/* Typing indicator */}
          <div className="flex justify-start">
            <div className="bg-primary/10 rounded-2xl rounded-bl-none p-4">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/50"
                    style={{
                      animation: `bounce 1.4s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};
export default AuthImagePattern;