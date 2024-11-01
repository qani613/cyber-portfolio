const validateContent = {
  blogPost: (post) => {
    const required = ['title', 'content', 'slug', 'date', 'category'];
    const hasAllRequired = required.every(field => post.attributes[field]);
    const hasValidDate = !isNaN(new Date(post.attributes.date).getTime());
    
    return {
      isValid: hasAllRequired && hasValidDate,
      missing: required.filter(field => !post.attributes[field]),
      errors: !hasValidDate ? ['Invalid date format'] : []
    };
  },
  
  project: (project) => {
    const required = ['title', 'description', 'tags', 'type'];
    const hasAllRequired = required.every(field => project.attributes[field]);
    const hasValidTags = Array.isArray(project.attributes.tags);
    
    return {
      isValid: hasAllRequired && hasValidTags,
      missing: required.filter(field => !project.attributes[field]),
      errors: !hasValidTags ? ['Tags must be an array'] : []
    };
  },
  
  image: (image) => {
    if (!image || !image.data) return { isValid: false, errors: ['No image data'] };
    const { attributes } = image.data;
    return {
      isValid: !!attributes?.url,
      errors: !attributes?.url ? ['Missing image URL'] : []
    };
  }
};

export default validateContent; 