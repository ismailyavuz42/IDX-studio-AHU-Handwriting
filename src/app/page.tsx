import {ProfileCreation} from '@/components/profile-creation';
import {ProfileSelection} from '@/components/profile-selection';
import {SampleUpload} from '@/components/sample-upload';
import {SimilarityAnalysis} from '@/components/similarity-analysis';
import {ResultDisplay} from '@/components/result-display';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Handwriting Harmony</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileCreation />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileSelection />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sample Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <SampleUpload />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Similarity Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <SimilarityAnalysis />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Result Display</CardTitle>
          </CardHeader>
          <CardContent>
            <ResultDisplay />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
