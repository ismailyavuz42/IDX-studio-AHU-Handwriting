'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function SampleUpload() {
  const [sampleImage, setSampleImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSampleImage(event.target.files[0]);
    }
  };

  return (
    <div>
      <Input
        type="file"
        id="sampleImage"
        accept="image/*"
        onChange={handleImageChange}
      />
      {sampleImage && (
        <div className="mt-2">
          Selected image: {sampleImage.name}
        </div>
      )}
    </div>
  );
}
