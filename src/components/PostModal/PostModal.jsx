/** @format */

"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postThread } from "../../redux/features/newThread/action";
import Spinner from "../atoms/Spinner/Spinner";
import FormContent from "../atoms/FormContent/FormContent";
import TextInput from "../atoms/TextInput/TextInput";

const PostModal = () => {
  const [modifiedData, setModifiedData] = useState({
    title: "",
    body: "",
    category: "",
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.newThread);
  const { token } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postThread(modifiedData));
  };

  return (
    <>
      {token && (
        <>
          <button
            className="btn btn-primary fixed bottom-8 right-8"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <Icon icon="ic:round-plus" width={24} height={24} />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-8">Buat Diskusi Baru</h3>
              <form
                action=""
                className="flex flex-col gap-2"
                onSubmit={handleSubmit}
              >
                <TextInput
                  type="text"
                  placeholder="Judul"
                  value={modifiedData.title}
                  onChange={(e) =>
                    setModifiedData({ ...modifiedData, text: e.target.value })
                  }
                />
                <TextInput
                  type="text"
                  placeholder="Kategori"
                  value={modifiedData.category}
                  onChange={(e) =>
                    setModifiedData({
                      ...modifiedData,
                      category: e.target.value,
                    })
                  }
                />
                <FormContent />
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : <div>TAMBAH</div>}
                </button>
              </form>
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

export default PostModal;
