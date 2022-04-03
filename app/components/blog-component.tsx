type BlogComponentProps = {
  heading: string;
  description: string;
};

export default function BlogComponent(props: BlogComponentProps) {
  const { heading, description } = props;
  return (
    <div className="bg-slate-600 text-white rounded-lg p-8 hover:bg-slate-400 hover:text-black">
      <h3 className="text-white hover:text-black">{heading}</h3>
      <p>{description}</p>
    </div>
  );
}
