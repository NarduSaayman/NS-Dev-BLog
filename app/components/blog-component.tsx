type BlogComponentProps = {
  heading: string;
  description: string;
};

export default function BlogComponent(props: BlogComponentProps) {
  const { heading, description } = props;
  return (
    <div
      className="group transition ease-in-out text-white rounded-lg p-8 hover:scale-105 
    bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 
    hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"
    >
      <h3 className="text-white group-hover:animate-bounce">
        <span className="hidden group-hover:inline">🪅 </span>
        {heading}
        <span className="hidden group-hover:inline"> 🪅</span>
      </h3>
      <p className="group-hover:animate-pulse">{description}</p>
    </div>
  );
}
