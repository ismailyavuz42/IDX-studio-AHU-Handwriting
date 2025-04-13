'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function ProfileCreation() {
  const [handwritingSamples, setHandwritingSamples] = useState<File[]>([]);
  const [handwritingFonts, setHandwritingFonts] = useState<File[]>([]);
  const [profileName, setProfileName] = useState<string>('');

  const handleSampleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setHandwritingSamples([...handwritingSamples, ...Array.from(event.target.files)]);
    }
  };

  const handleFontChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setHandwritingFonts([...handwritingFonts, ...Array.from(event.target.files)]);
    }
  };

  const handleCreateProfile = () => {
    // Handle profile creation logic here, including API calls, etc.
    console.log('Creating profile with:', {
      profileName,
      handwritingSamples,
      handwritingFonts,
    });
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="profileName" className="block text-sm font-medium text-gray-700">
          Profile Name
        </label>
        <Input
          type="text"
          id="profileName"
          className="mt-1"
          placeholder="Enter profile name"
          value={profileName}
          onChange={e => setProfileName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="handwritingSamples" className="block text-sm font-medium text-gray-700">
          Handwriting Samples
        </label>
        <Input
          type="file"
          id="handwritingSamples"
          multiple
          accept="image/*"
          className="mt-1"
          onChange={handleSampleChange}
        />
        <ul className="mt-2 list-disc pl-5">
          {handwritingSamples.map((sample, index) => (
            <li key={index}>{sample.name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <label htmlFor="handwritingFonts" className="block text-sm font-medium text-gray-700">
          Handwriting Fonts
        </label>
        <Input
          type="file"
          id="handwritingFonts"
          multiple
          accept=".ttf,.otf"
          className="mt-1"
          onChange={handleFontChange}
        />
        <ul className="mt-2 list-disc pl-5">
          {handwritingFonts.map((font, index) => (
            <li key={index}>{font.name}</li>
          ))}
        </ul>
      </div>

      <Button onClick={handleCreateProfile}>Create Profile</Button>
    </div>
  );
}
