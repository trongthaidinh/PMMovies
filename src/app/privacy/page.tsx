export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">Chính sách bảo mật</h1>
      
      <div className="prose prose-invert max-w-none space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Thông tin chúng tôi thu thập</h2>
          <p>Khi bạn sử dụng website, chúng tôi có thể thu thập các thông tin sau:</p>
          <ul className="list-inside list-disc">
            <li>
              <span className="font-medium">Thông tin tài khoản:</span> email, tên hiển thị khi bạn đăng ký tài khoản
            </li>
            <li>
              <span className="font-medium">Thông tin sử dụng:</span> lịch sử xem phim, danh sách phim yêu thích
            </li>
            <li>
              <span className="font-medium">Thông tin thiết bị:</span> loại thiết bị, trình duyệt, địa chỉ IP
            </li>
            <li>
              <span className="font-medium">Cookie và công nghệ tương tự:</span> để cải thiện trải nghiệm người dùng
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Mục đích sử dụng thông tin</h2>
          <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
          <ul className="list-inside list-disc">
            <li>Cung cấp và duy trì dịch vụ</li>
            <li>Cải thiện trải nghiệm người dùng</li>
            <li>Gửi thông báo về dịch vụ khi cần thiết</li>
            <li>Phát hiện và ngăn chặn các hoạt động gian lận</li>
            <li>Phân tích xu hướng sử dụng dịch vụ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Bảo vệ thông tin</h2>
          <p>
            Chúng tôi cam kết bảo vệ thông tin người dùng bằng các biện pháp:
          </p>
          <ul className="list-inside list-disc">
            <li>Mã hóa dữ liệu nhạy cảm</li>
            <li>Giới hạn quyền truy cập vào thông tin người dùng</li>
            <li>Thường xuyên cập nhật các biện pháp bảo mật</li>
            <li>Không chia sẻ thông tin với bên thứ ba khi chưa được sự đồng ý</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Cookie và công nghệ theo dõi</h2>
          <p>
            Website sử dụng cookie và các công nghệ tương tự để:
          </p>
          <ul className="list-inside list-disc">
            <li>Ghi nhớ tùy chọn người dùng</li>
            <li>Duy trì phiên đăng nhập</li>
            <li>Thu thập thông tin về cách sử dụng website</li>
            <li>Cải thiện hiệu suất và tính năng của website</li>
          </ul>
          <p className="mt-2">
            Bạn có thể điều chỉnh cài đặt cookie trong trình duyệt của mình, tuy nhiên việc này có thể ảnh hưởng đến một số tính năng của website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Quyền của người dùng</h2>
          <p>Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>
          <ul className="list-inside list-disc">
            <li>Truy cập và xem thông tin cá nhân</li>
            <li>Yêu cầu cập nhật hoặc sửa đổi thông tin</li>
            <li>Yêu cầu xóa tài khoản và dữ liệu liên quan</li>
            <li>Từ chối nhận thông báo marketing (nếu có)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Thay đổi chính sách</h2>
          <p>
            Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn thông qua email hoặc thông báo trên website. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận những thay đổi đó.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi qua email:{' '}
            <a 
              href="mailto:phimtrendmovies@gmail.com" 
              className="text-primary hover:underline"
            >
              phimtrendmovies@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 