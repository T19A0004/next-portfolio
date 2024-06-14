import { Provider } from './Provider';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className='light'>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
