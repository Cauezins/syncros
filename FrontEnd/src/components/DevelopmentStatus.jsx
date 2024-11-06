const DevelopmentStatus = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full shadow-lg">
        <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
        <span className="text-white font-medium text-sm">Sistema em Desenvolvimento</span>
      </div>
    </div>
  );
};

export default DevelopmentStatus;