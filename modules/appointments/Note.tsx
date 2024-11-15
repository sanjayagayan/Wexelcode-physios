import ContainedButton from "@/components/ui/ContainedButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Prop = {
  note?: string;
};
const Note = ({ note }: Prop) => {
  return (
    <Box width="50%" paddingLeft={6}>
      <TextField
        label="Note"
        multiline
        rows={15}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: 3,
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#A51008",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#A51008",
            },
            "&:hover fieldset": {
              borderColor: "#A51008",
              backgroundColor: "#A5100808",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#A51008",
              backgroundColor: "#A5100808",
            },
          },
        }}
      />
      <ContainedButton>Save Note</ContainedButton>
    </Box>
  );
};

export default Note;
