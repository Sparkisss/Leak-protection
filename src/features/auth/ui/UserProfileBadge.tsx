import { TYPOGRAPHY } from '@/shared/const/typography';

const UserProfileBadge = () => {
  return (
    <section className="bg-[url('/background/auth.png')] bg-cover bg-center relative h-64 mb-32">
      {/* Оверлей */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-2 h-full">
        <div className="flex justify-between items-center bottom-0 absolute w-full p-10">
          <div className="text-sm">
            <span>413 followers |</span>
            <span> 13 following</span>
          </div>
          <div className="p-3 rounded-full bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-3xl">
            <img
              src="/icon/addPhoto.svg"
              alt="Change icon"
              className="w-5 h-5 opacity-80"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 absolute -bottom-18 w-full">
          <img
            src="/userLogo/userProfileBig.png"
            alt="User profile"
            className="w-20 h-20"
          />
          <div className={TYPOGRAPHY.caption}>update your profile</div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileBadge;
