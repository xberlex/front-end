function InputSubmit({ texto }) {
    return (
        <button
            className="bg-[#e5e5e5] hover:bg-[#d4d4d4] active:scale-[0.99] transition-all text-[#1a1a1a] text-base rounded-md w-full py-2.5 mt-3 cursor-pointer"
            type="submit"
        >
            {texto}
        </button>
    );
}

export default InputSubmit;