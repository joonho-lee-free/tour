// app/_components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 사업자 정보 */}
          <div className="text-sm text-gray-600">
            <div className="text-base font-extrabold text-gray-900">주식회사 허니예스</div>
            <div className="mt-3 space-y-1">
              <div>
                <span className="font-semibold text-gray-900">상호명</span> : 주식회사 허니예스
              </div>
              <div>
                <span className="font-semibold text-gray-900">대표</span> : 하정일
              </div>
              <div>
                <span className="font-semibold text-gray-900">사무실주소</span> : 울산광역시 남구 번영로 246번길 10(삼산동)
              </div>
              <div>
                <span className="font-semibold text-gray-900">사업자등록번호</span> : 610-81-98197
              </div>
              <div>
                <span className="font-semibold text-gray-900">통신판매업신고</span> : 2022-울산남구-0330
              </div>
              <div>
                <span className="font-semibold text-gray-900">개인정보책임자</span> : 하정일
              </div>
              <div>
                <span className="font-semibold text-gray-900">E-mail</span> : hajipower@naver.com
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              © 허니예스. All rights reserved.
            </div>
          </div>

          {/* 고객센터 */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-sm font-bold text-gray-900">고객센터</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900">
              052-227-6464
            </div>
            <div className="mt-2 text-sm text-gray-600">
              평일: 09:00 ~ 22:00
              <br />
              작성 즉시 담당자가 연락드려요
              <br />
              주말 및 공휴일 조건근무
            </div>

            <div className="mt-4 space-y-2">
              {/* 전화 */}
              <a
                href="tel:0522276464"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
              >
                전화하기
              </a>

              {/* ✅ 문자 상담: 폼 섹션(#sms-lead)으로 이동 */}
              <a
                href="/#sms-lead"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900"
              >
                문자상담 요청
              </a>
            </div>
          </div>

          {/* 입금 계좌 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="text-sm font-bold text-gray-900">입금 계좌안내</div>
            <div className="mt-3 space-y-1 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">농협은행</span> 302-0203-2665-01
              </div>
              <div>
                <span className="font-semibold text-gray-900">예금주</span> : 하정일((주)허니예스)
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
              입금 시 <span className="font-semibold text-gray-900">주문자 상호명</span> 기재 부탁드립니다.
            </div>
          </div>
        </div>

        {/* 하단 메뉴 */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="/company">
            회사소개
          </a>
          <a className="hover:text-gray-900" href="/privacy">
            개인정보처리방침
          </a>
          <a className="hover:text-gray-900" href="/terms">
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
