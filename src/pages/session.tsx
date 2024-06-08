import Blob from '../assets/Blob';
import Form from '../components/session/sessions-form';

export default function Session() {
  return (
    <section className='flex overflow-hidden justify-center items-center max-w-screen min-h-screen'>
      <div className='group flex justify-center items-center'>
        <Form />
        <Blob />
      </div>
    </section>
  );
}
