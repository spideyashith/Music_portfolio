
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initialMusic = [
  { title: "Sample Song", artist: "Lloyd Rego", album: "Gold Era" },
];

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [musicList, setMusicList] = useState(initialMusic);
  const [newMusic, setNewMusic] = useState({ title: "", artist: "", album: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded authentication
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleAddMusic = (e: React.FormEvent) => {
    e.preventDefault();
    setMusicList([...musicList, newMusic]);
    setNewMusic({ title: "", artist: "", album: "" });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Admin Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="p-2 border rounded bg-card text-foreground"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="p-2 border rounded bg-card text-foreground"
              required
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Admin Dashboard</h1>
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Add New Music</h2>
        <form onSubmit={handleAddMusic} className="flex flex-col gap-4 md:flex-row md:items-end">
          <input
            type="text"
            placeholder="Title"
            value={newMusic.title}
            onChange={e => setNewMusic({ ...newMusic, title: e.target.value })}
            className="p-2 border rounded bg-card text-foreground"
            required
          />
          <input
            type="text"
            placeholder="Artist"
            value={newMusic.artist}
            onChange={e => setNewMusic({ ...newMusic, artist: e.target.value })}
            className="p-2 border rounded bg-card text-foreground"
            required
          />
          <input
            type="text"
            placeholder="Album"
            value={newMusic.album}
            onChange={e => setNewMusic({ ...newMusic, album: e.target.value })}
            className="p-2 border rounded bg-card text-foreground"
            required
          />
          <Button type="submit">Add Music</Button>
        </form>
      </Card>
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Music List</h2>
        <ul className="space-y-2">
          {musicList.map((music, idx) => (
            <li key={idx} className="flex gap-4 items-center bg-popover p-2 rounded">
              <span className="font-bold text-primary">{music.title}</span>
              <span className="text-muted-foreground">by {music.artist}</span>
              <span className="text-accent">({music.album})</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Admin;
