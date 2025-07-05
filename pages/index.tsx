import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">ALX Listing App</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <Card 
          title="Beautiful Apartment" 
          description="A lovely place to stay"
          image="/assets/images/image 3.jpg"
        />
        <Card 
          title="Cozy House" 
          description="Perfect for families"
        />
      </div>
      
      <div className="space-x-4">
        <Button text="Book Now" variant="primary" />
        <Button text="View Details" variant="secondary" />
      </div>
    </div>
  );
}