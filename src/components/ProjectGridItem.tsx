import React from 'react';

interface GridItemProps {
  item: {
    type: string;
    content: any;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

const ProjectGridItem: React.FC<GridItemProps> = ({ item }) => {
  const { type, content, x, y, w, h } = item;

  const gridStyles = {
    gridColumnStart: x + 1,
    gridColumnEnd: x + 1 + w,
    gridRowStart: y + 1,
    gridRowEnd: y + 1 + h,
  };

  const renderContent = () => {
    switch (type) {
      case 'title':
        return <h1 className="text-4xl font-bold">{content}</h1>;
      case 'quick_description':
        return <p className="text-muted-foreground text-lg">{content}</p>;
      case 'image':
        return <img src={content} alt="Project Image" className="w-full h-full object-cover rounded-lg shadow-lg" />;
      case 'description':
        if (Array.isArray(content)) {
          return (
            <ul className="list-disc pl-5 space-y-2">
              {content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          );
        }
        return <p>{content}</p>;
      case 'takeaways':
        return <p><strong>Takeaways:</strong> {content}</p>;
      case 'duration':
        return <p><strong>Duration:</strong> {content}</p>;
      case 'tags':
        return <p><strong>Tags:</strong> {Array.isArray(content) ? content.join(', ') : content}</p>;
      default:
        return <p>{JSON.stringify(content)}</p>;
    }
  };

  return (
    <div style={gridStyles} className="p-4">
      {renderContent()}
    </div>
  );
};

export default ProjectGridItem;
