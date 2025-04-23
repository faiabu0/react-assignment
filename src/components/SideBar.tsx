import VideoPlayer from "./VideoPlayer";

interface SideBarProps {
    title: string;
    url: string;
  }

export default function SideBar({title, url}: SideBarProps){
    return(
        <div className="sidebar">
            <h1 className="pt-3 ps-5">{title}</h1>
            <VideoPlayer src={url} />
        </div>
    );

}