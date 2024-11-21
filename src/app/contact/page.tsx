export default function ContactPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">Liên Hệ</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-lg">
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc cần hỗ trợ, vui lòng liên hệ với chúng tôi qua các kênh sau:
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="size-6 text-primary"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-lg">Email: </span>
            <a 
              href="mailto:phimtrendmovies@gmail.com" 
              className="text-primary hover:underline"
            >
              phimtrendmovies@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-6 text-primary"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-lg">TikTok: </span>
            <a 
              href="https://tiktok.com/@phimtrend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @phimtrend
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-dark-1 p-4">
          <p className="text-gray-400">
            Chúng tôi sẽ cố gắng phản hồi trong thời gian sớm nhất. Cảm ơn bạn đã liên hệ với PhimTrend!
          </p>
        </div>
      </div>
    </div>
  );
} 