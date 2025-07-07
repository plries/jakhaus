export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 Jakhaus. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="mx-2 text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="mx-2 text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
