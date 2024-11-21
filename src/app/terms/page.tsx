export default function TermsPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">Điều khoản sử dụng</h1>
      
      <div className="prose prose-invert max-w-none space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Điều khoản chung</h2>
          <p>
            Bằng việc truy cập và sử dụng website này, bạn đồng ý chấp nhận và tuân theo các điều khoản và điều kiện sử dụng được quy định tại đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Về nội dung và bản quyền</h2>
          <p>
            Website của chúng tôi là nền tảng tổng hợp thông tin phim ảnh từ nhiều nguồn khác nhau trên Internet. Chúng tôi không sở hữu hay nắm giữ bản quyền đối với các nội dung phim được hiển thị trên website.
          </p>
          <p>
            Tất cả các nội dung phim, hình ảnh, và thông tin liên quan đều được cung cấp bởi các bên thứ ba. Chúng tôi chỉ đóng vai trò trung gian trong việc tổng hợp và hiển thị thông tin.
          </p>
          <p>
            Nếu bạn là chủ sở hữu bản quyền và phát hiện nội dung của mình trên website mà chưa được sự cho phép, vui lòng liên hệ với chúng tôi qua email:{' '}
            <a 
              href="mailto:phimtrendmovies@gmail.com" 
              className="text-primary hover:underline"
            >
              phimtrendmovies@gmail.com
            </a>
            {' '}để được hỗ trợ gỡ bỏ nội dung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Tài khoản người dùng</h2>
          <p>
            Khi tạo tài khoản trên website, bạn cần:
          </p>
          <ul className="list-inside list-disc">
            <li>Cung cấp thông tin chính xác và cập nhật</li>
            <li>Tự chịu trách nhiệm bảo mật tài khoản</li>
            <li>Không chia sẻ thông tin đăng nhập với người khác</li>
            <li>Thông báo ngay cho chúng tôi nếu phát hiện việc sử dụng trái phép tài khoản của bạn</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Quy định sử dụng</h2>
          <p>
            Khi sử dụng website, người dùng không được:
          </p>
          <ul className="list-inside list-disc">
            <li>Sử dụng các công cụ tự động để crawl dữ liệu</li>
            <li>Thực hiện các hành vi can thiệp vào hoạt động bình thường của website</li>
            <li>Đăng tải nội dung spam hoặc quảng cáo trái phép</li>
            <li>Có các hành vi vi phạm pháp luật Việt Nam</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Miễn trừ trách nhiệm</h2>
          <p>
            Chúng tôi không chịu trách nhiệm về:
          </p>
          <ul className="list-inside list-disc">
            <li>Tính chính xác, đầy đủ của thông tin phim được cung cấp bởi bên thứ ba</li>
            <li>Chất lượng của các nội dung phim</li>
            <li>Mọi thiệt hại phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ</li>
            <li>Việc gián đoạn, ngừng hoạt động của website vì bất kỳ lý do gì</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có quyền thay đổi các điều khoản này vào bất kỳ thời điểm nào mà không cần thông báo trước. Việc tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc bạn chấp nhận những thay đổi đó.
          </p>
        </section>
      </div>
    </div>
  );
}
