export default function AboutPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">Về Chúng Tôi</h1>
      
      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Giới thiệu</h2>
          <p>
            PhimTrend là nền tảng xem phim trực tuyến, nơi tổng hợp và cập nhật liên tục các bộ phim mới nhất từ nhiều nguồn khác nhau trên Internet. Chúng tôi cung cấp một thư viện phim đa dạng với nhiều thể loại, từ phim điện ảnh, phim bộ đến hoạt hình, anime, giúp người dùng dễ dàng tìm kiếm và thưởng thức những nội dung giải trí yêu thích.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Sứ mệnh</h2>
          <p>
            Sứ mệnh của chúng tôi là mang đến cho người dùng một nền tảng xem phim tiện lợi, với trải nghiệm người dùng tốt nhất. Chúng tôi không ngừng cải tiến và nâng cấp hệ thống để đảm bảo:
          </p>
          <ul className="list-inside list-disc">
            <li>Cập nhật nhanh chóng các bộ phim mới</li>
            <li>Giao diện thân thiện, dễ sử dụng</li>
            <li>Tốc độ tải nhanh, ổn định</li>
            <li>Hỗ trợ đa nền tảng: máy tính, điện thoại, tablet</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tính năng nổi bật</h2>
          <ul className="list-inside list-disc">
            <li>Thư viện phim đa dạng, phong phú</li>
            <li>Tìm kiếm và lọc phim thông minh</li>
            <li>Hệ thống đề xuất phim theo sở thích</li>
            <li>Tính năng đánh dấu phim yêu thích</li>
            <li>Giao diện tối ưu cho trải nghiệm xem phim</li>
            <li>Cập nhật thông tin phim từ các nguồn uy tín</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cam kết của chúng tôi</h2>
          <ul className="list-inside list-disc">
            <li>Không hiển thị quảng cáo gây khó chịu</li>
            <li>Bảo vệ thông tin người dùng</li>
            <li>Hỗ trợ người dùng nhanh chóng</li>
            <li>Liên tục cập nhật và cải thiện dịch vụ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ với chúng tôi qua:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Email:{' '}
              <a 
                href="mailto:phimtrendmovies@gmail.com" 
                className="text-primary hover:underline"
              >
                phimtrendmovies@gmail.com
              </a>
            </li>
            <li>
              TikTok:{' '}
              <a 
                href="https://tiktok.com/@phimtrend" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                PhimTrend
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
} 