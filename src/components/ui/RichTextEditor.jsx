import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';   // ✅ changed
import 'react-quill-new/dist/quill.snow.css'; // ✅ changed

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );j
};

export default RichTextEditor;
