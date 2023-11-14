const Hero = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center justify-center py-10 bg-light">
      <button className="rounded-lg border-primary hover:bg-light border-2 p-3 bg-white">
        Post your issue
      </button>
      <button className="rounded-lg border-primary hover:bg-light border-2 p-3 bg-white">
        Post your suggestion
      </button>
    </section>
  );
}; 

export default Hero;
