export const Divider = () => {
  const gradientStyleLeft = {
    borderImage: 'linear-gradient(to right, #AD1AAF, #F9FAFB) 1',
  };
  const gradientStyleRight = {
    borderImage: 'linear-gradient(to left, #AD1AAF, #F9FAFB) 1',
  };

  return (
    <article className="flex items-center my-8 w-screen mb-30">
      {/* Левая линия */}
      <div className="flex-1 h-px border-2" style={gradientStyleLeft}></div>

      {/* Правая линия */}
      <div className="flex-1 h-px border-2" style={gradientStyleRight}></div>
    </article>
  );
};
