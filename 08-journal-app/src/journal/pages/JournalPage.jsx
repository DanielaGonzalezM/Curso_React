import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  );
};
