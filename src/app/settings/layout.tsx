import React from 'react';
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className={'text-blue-600 antialiased'}>
          <h1>Layout Wrapper</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
