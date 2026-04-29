export function DashboardV3() {
  return (
    <div className="dashboard-v3" style={{
      background: '#0C0C0C',
      color: '#FFFFFF',
      fontFamily: "'Figtree', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
    }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        flexShrink: 0,
        background: '#141414',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        paddingBottom: '16px',
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px 20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '8px',
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: 'linear-gradient(135deg, #FF5C00, #27E2A4)',
            borderRadius: '8px',
            flexShrink: 0,
          }} />
          <div style={{
            fontSize: '16px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.3px',
          }}>
            SweatPals
          </div>
        </div>

        {/* Nav Items */}
        <div style={{ padding: '0' }}>
          <div style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: '#525252',
            padding: '12px 20px 6px',
          }}>
            Main
          </div>
          {[
            { icon: '📊', label: 'Dashboard', active: true },
            { icon: '📅', label: 'Events', active: false },
            { icon: '👥', label: 'Pals', active: false },
            { icon: '💰', label: 'Revenue', active: false },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              fontSize: '13.5px',
              fontWeight: item.active ? 600 : 500,
              color: item.active ? '#FFFFFF' : '#A0A0A0',
              cursor: 'pointer',
              background: item.active ? 'rgba(255,255,255,0.07)' : 'transparent',
              position: 'relative',
            }}>
              {item.active && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: '18px',
                  background: '#FFFFFF',
                  borderRadius: '0 3px 3px 0',
                }} />
              )}
              <div style={{ fontSize: '15px', width: '18px', textAlign: 'center', flexShrink: 0 }}>{item.icon}</div>
              {item.label}
            </div>
          ))}
        </div>

        {/* Host Card */}
        <div style={{
          marginTop: 'auto',
          padding: '12px 16px',
          margin: '16px 12px 0',
          background: '#1C1C1C',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E879A0, #E8D44D, #A8E063)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 800,
            color: '#000',
            flexShrink: 0,
          }}>
            JR
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>Jamie Rivera</div>
            <div style={{
              fontSize: '10px',
              color: '#525252',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#27E2A4' }} />
              Pro
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <div style={{
          padding: '0 28px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: '#141414',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>Dashboard</div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#1C1C1C',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '12px',
              color: '#A0A0A0',
              cursor: 'pointer',
            }}>
              <span>🗓️</span>
              <span style={{ marginLeft: '4px' }}>Last 7 days</span>
              <span style={{ fontSize: '8px', marginLeft: '2px', transform: 'translateY(2px)' }}>▼</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255,92,0,0.12)',
              border: '1px solid rgba(255,92,0,0.3)',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#FF5C00',
              letterSpacing: '0.4px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5C00' }} />
              LIVE
            </div>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              background: '#FFFFFF',
              color: '#0C0C0C',
              border: 'none',
              borderRadius: '20px',
              padding: '7px 16px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
            }}>
              ⚡ Huddle
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          padding: '24px 28px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* Stat Cards Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}>
            {[
              { label: 'Total Pals', value: '142', delta: '+12%', sub: 'vs last week' },
              { label: 'Check-ins', value: '67', delta: '+18%', sub: 'this week' },
              { label: 'Revenue', value: '$1.2k', delta: '+8%', sub: 'this week' },
              { label: 'Engagement', value: '94%', delta: '+2%', sub: 'active rate' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '18px 20px',
                cursor: 'pointer',
              }}>
                <div style={{ fontSize: '13px', color: '#A0A0A0', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: '#22C55E',
                  borderRadius: '6px',
                  padding: '2px 7px',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                }}>
                  ↑ {stat.delta}
                </div>
                <div style={{ fontSize: '11px', color: '#525252', marginTop: '6px' }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '16px',
          }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Today's Events */}
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderBottom: 'none',
                  paddingBottom: '12px',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Today's Events</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#525252',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}>
                    View all →
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  padding: '0 20px 16px',
                  overflowX: 'auto',
                }}>
                  {[
                    { name: 'Beach Yoga', time: '6:00 PM', count: '12', live: true },
                    { name: 'Morning Run', time: '7:00 AM', count: '8', live: false },
                    { name: 'HIIT Session', time: '5:30 PM', count: '15', live: false },
                  ].map((event, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: event.live ? 'rgba(255,92,0,0.06)' : '#1C1C1C',
                      border: event.live ? '1px solid rgba(255,92,0,0.35)' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      flexShrink: 0,
                      minWidth: '190px',
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: event.live ? '#FF5C00' : '#525252',
                        flexShrink: 0,
                        alignSelf: 'flex-start',
                        marginTop: '5px',
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {event.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#525252', marginTop: '1px' }}>{event.time}</div>
                      </div>
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        background: '#2C2C2C',
                        borderRadius: '6px',
                        padding: '2px 7px',
                        flexShrink: 0,
                      }}>
                        {event.count}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Attendee List */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 20px 10px',
                    gap: '8px',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: '#FFFFFF',
                      color: '#0C0C0C',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: '1px solid #FFFFFF',
                    }}>
                      All
                      <div style={{
                        background: 'rgba(0,0,0,0.15)',
                        color: 'rgba(0,0,0,0.6)',
                        borderRadius: '4px',
                        padding: '0px 5px',
                        fontSize: '10px',
                        fontWeight: 700,
                      }}>
                        12
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: '#1C1C1C',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: '#A0A0A0',
                    }}>
                      Checked in
                      <div style={{
                        background: 'rgba(255,255,255,0.12)',
                        borderRadius: '4px',
                        padding: '0px 5px',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#A0A0A0',
                      }}>
                        8
                      </div>
                    </div>
                  </div>

                  {[
                    { name: 'Sarah Martinez', admission: 'Drop-in', tags: ['New Pal'], checked: true },
                    { name: 'Alex Kim', admission: 'Class Pass', tags: ['Membership'], checked: true },
                    { name: 'Jamie Lee', admission: 'Monthly', tags: ['Waiver'], checked: false },
                  ].map((attendee, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 20px',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                      cursor: 'pointer',
                    }}>
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        flexShrink: 0,
                        background: `linear-gradient(135deg, ${i === 0 ? '#27E2A4' : i === 1 ? '#8A3FFC' : '#E8D44D'}, rgba(255,255,255,0.2))`,
                      }}>
                        {attendee.name.charAt(0)}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '13px', fontWeight: 600 }}>{attendee.name}</div>
                        <div style={{ fontSize: '11px', color: '#525252' }}>{attendee.admission}</div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                        {attendee.tags.map((tag, j) => (
                          <div key={j} style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            borderRadius: '6px',
                            padding: '3px 8px',
                            background: tag === 'New Pal' ? 'rgba(39,226,164,0.12)' : tag === 'Membership' ? 'rgba(138,63,252,0.15)' : 'rgba(232,212,77,0.12)',
                            color: tag === 'New Pal' ? '#27E2A4' : tag === 'Membership' ? '#B47FFF' : '#E8D44D',
                          }}>
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: attendee.checked ? '#27E2A4' : '#2C2C2C',
                        border: attendee.checked ? '1px solid #27E2A4' : '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                        color: attendee.checked ? '#000' : 'transparent',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}>
                        {attendee.checked && '✓'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Leader Pipeline */}
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Leader Pipeline</div>
                </div>
                {[
                  { rank: 1, name: 'Alex Kim', score: '147', sub: '12 events', color: '#E8D44D' },
                  { rank: 2, name: 'Sarah M.', score: '134', sub: '9 events', color: '#C0C0C0' },
                  { rank: 3, name: 'Jamie L.', score: '128', sub: '8 events', color: '#CD7F32' },
                  { rank: 4, name: 'Marcus T.', score: '112', sub: '7 events', color: '#525252' },
                ].map((leader, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    cursor: 'pointer',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: leader.color,
                      width: '18px',
                      textAlign: 'center',
                      flexShrink: 0,
                      fontFamily: "'DM Mono', monospace",
                    }}>
                      {leader.rank}
                    </div>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      flexShrink: 0,
                      background: `linear-gradient(135deg, ${leader.color}, rgba(255,255,255,0.2))`,
                    }}>
                      {leader.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {leader.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#525252' }}>{leader.sub}</div>
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: "'DM Mono', monospace",
                      color: '#FFFFFF',
                    }}>
                      {leader.score}
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Feed */}
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Activity</div>
                </div>
                {[
                  { name: 'Sarah M.', action: 'RSVP\'d for Beach Yoga', tag: 'RSVP', color: '#27E2A4' },
                  { name: 'Alex K.', action: 'checked in', tag: 'CHECK-IN', color: '#A0A0A0' },
                  { name: 'Jamie L.', action: 'found you on the map', tag: 'DISCOVERY', color: '#E879A0' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                      background: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.2))`,
                    }}>
                      {item.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12.5px', color: '#A0A0A0', lineHeight: 1.5 }}>
                        <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>{item.name}</strong> {item.action}
                      </div>
                      <div style={{ fontSize: '10px', color: '#525252', marginTop: '2px' }}>2 min ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}
