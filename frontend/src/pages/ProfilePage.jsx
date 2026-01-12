import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <>
      <style>{`
        .profile-card {
          transition: all 0.3s ease;
        }

        .avatar-container {
          transition: transform 0.3s ease;
        }

        .avatar-container:hover {
          transform: translateY(-4px);
        }

        .camera-button {
          transition: all 0.2s ease;
        }

        .camera-button:hover {
          transform: scale(1.1);
        }

        .info-field {
          transition: all 0.2s ease;
        }

        .info-field:hover {
          transform: translateX(2px);
        }
      `}</style>

      <div className="h-screen pt-20">
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="profile-card bg-base-300 rounded-2xl p-6 space-y-8 shadow-lg">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Profile</h1>
              <p className="mt-2">Your profile information</p>
            </div>

            {/* avatar upload section */}
            <div className="flex flex-col items-center gap-4">
              <div className="avatar-container relative">
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-32 rounded-full object-cover border-4 shadow-xl"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                    camera-button absolute bottom-0 right-0 
                    bg-base-content hover:scale-110
                    p-2 rounded-full cursor-pointer shadow-lg
                    transition-all duration-200
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                  `}
                >
                  <Camera className="w-5 h-5 text-base-200" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-sm text-zinc-400">
                {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
              </p>
            </div>

            <div className="space-y-4">
              <div className="info-field space-y-1.5">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </div>
                <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
              </div>

              <div className="info-field space-y-1.5">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </div>
                <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
              </div>
            </div>

            <div className="mt-6 bg-base-300 rounded-xl p-6 shadow-md">
              <h2 className="text-lg font-medium mb-4">Account Information</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span>Member Since</span>
                  <span>{authUser.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Account Status</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;