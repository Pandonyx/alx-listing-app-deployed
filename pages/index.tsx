import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Header from '../components/layout/Header';


export default function Home() {
  return (
    <div className="">
      
      <h1 className="mb-8 text-3xl font-bold">test</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        
        
      </div>
      
      <div className="space-x-4">
        <Button text="Book Now" variant="primary" />
        <Button text="View Details" variant="secondary" />
      </div>
    </div>
  );
}