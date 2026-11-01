"use client";
import { useState } from "react";
import { videos, ui, site } from "@/lib/site";
import { GRAD } from "@/lib/util";
import { T } from "@/lib/i18n";

export default function VideoGrid({ limit }: { limit?: number }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const list = limit ? videos.slice(0, limit) : videos;
  return (
    <>
      <div className="videos">
        {list.map((v, i) => v.id ? (
          <button key={v.id} className="vid" aria-label={"Play " + v.title} onClick={() => setPlaying(v.id)}>
            {playing === v.id
              ? <iframe src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?autoplay=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen title={v.title} />
              : <><img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" /><span className="play"><i /></span><span className="vtitle">{v.title}</span></>}
          </button>
        ) : (
          <div key={i} className="vid static" style={{ background: `linear-gradient(135deg,${GRAD[i % GRAD.length]})` }}>
            <span className="play"><i /></span><span className="vtitle">{v.title}</span>
          </div>
        ))}
      </div>
      {site.contact.youtube && <p className="center more"><a href={site.contact.youtube} target="_blank" rel="noopener"><T v={ui.common.watchMore} /></a></p>}
    </>
  );
}
