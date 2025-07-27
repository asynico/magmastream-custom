export interface PlayerOptions {
	/** The guild ID the Player belongs to. */
	guildId: string;
	/** The text channel the Player belongs to. */
	textChannelId: string;
	/** The voice channel the Player belongs to. */
	voiceChannelId?: string;
	/** The node the Player uses. */
	node?: string;
	/** The initial volume the Player will use. */
	volume?: number;
	/** If the player should mute itself. */
	selfMute?: boolean;
	/** If the player should deaf itself. */
	selfDeafen?: boolean;
	/** If the player should deaf itself. */
	deaf?: boolean;
}
