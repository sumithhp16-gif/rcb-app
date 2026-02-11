const ComponentFunction = function() {
  // @section:imports @depends:[]
  const React = require('react');
  const { useState, useEffect, useContext, useMemo, useCallback } = React;
  const { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Alert, Platform, StatusBar, ActivityIndicator, KeyboardAvoidingView, FlatList, Image, Dimensions } = require('react-native');
  const { MaterialIcons } = require('@expo/vector-icons');
  const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
  // @end:imports

  // @section:theme @depends:[]
  const storageStrategy = 'local';
  const primaryColor = '#DC143C';
  const accentColor = '#FFD700';
  const backgroundColor = '#FFFFFF';
  const cardColor = '#F8F9FA';
  const textPrimary = '#212529';
  const textSecondary = '#6C757D';
  const designStyle = 'modern';
  // @end:theme

  // @section:navigation-setup @depends:[]
  const Tab = createBottomTabNavigator();
  const screenWidth = Dimensions.get('window').width;
  // @end:navigation-setup

  // @section:ThemeContext @depends:[theme]
  const ThemeContext = React.createContext();
  const ThemeProvider = function(props) {
    const darkModeState = useState(false);
    const darkMode = darkModeState[0];
    const setDarkMode = darkModeState[1];
    
    const lightTheme = useMemo(function() {
      return {
        colors: {
          primary: primaryColor,
          accent: accentColor,
          background: backgroundColor,
          card: cardColor,
          textPrimary: textPrimary,
          textSecondary: textSecondary,
          border: '#E5E7EB',
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B'
        }
      };
    }, []);
    
    const darkTheme = useMemo(function() {
      return {
        colors: {
          primary: primaryColor,
          accent: accentColor,
          background: '#1F2937',
          card: '#374151',
          textPrimary: '#F9FAFB',
          textSecondary: '#D1D5DB',
          border: '#4B5563',
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B'
        }
      };
    }, []);
    
    const theme = darkMode ? darkTheme : lightTheme;
    
    const toggleDarkMode = useCallback(function() {
      setDarkMode(function(prev) { return !prev; });
    }, []);
    
    const value = useMemo(function() {
      return { theme: theme, darkMode: darkMode, toggleDarkMode: toggleDarkMode, designStyle: designStyle };
    }, [theme, darkMode, toggleDarkMode]);
    
    return React.createElement(ThemeContext.Provider, { value: value }, props.children);
  };
  
  const useTheme = function() { 
    return useContext(ThemeContext); 
  };
  // @end:ThemeContext

  // @section:data @depends:[]
  const rcbPlayers = [
    {
      id: '1',
      name: 'Virat Kohli',
      role: 'Batsman',
      matches: 237,
      runs: 7263,
      average: '37.25',
      imageKey: 'cricket-player-batting-action'
    },
    {
      id: '2', 
      name: 'AB de Villiers',
      role: 'Wicket-keeper Batsman',
      matches: 184,
      runs: 5162,
      average: '39.70',
      imageKey: 'cricket-wicket-keeper-player'
    },
    {
      id: '3',
      name: 'Yuzvendra Chahal',
      role: 'Bowler',
      matches: 113,
      wickets: 139,
      average: '22.50',
      imageKey: 'cricket-spin-bowler-action'
    },
    {
      id: '4',
      name: 'Glenn Maxwell',
      role: 'All-rounder',
      matches: 91,
      runs: 2157,
      average: '31.31',
      imageKey: 'cricket-all-rounder-player'
    },
    {
      id: '5',
      name: 'Mohammed Siraj',
      role: 'Bowler',
      matches: 79,
      wickets: 93,
      average: '29.18',
      imageKey: 'cricket-fast-bowler-action'
    },
    {
      id: '6',
      name: 'Faf du Plessis',
      role: 'Batsman',
      matches: 100,
      runs: 2935,
      average: '34.94',
      imageKey: 'cricket-captain-player-portrait'
    }
  ];

  const famousMatches = [
    {
      id: '1',
      opponent: 'vs Gujarat Lions',
      date: 'May 14, 2016',
      venue: 'M. Chinnaswamy Stadium',
      result: 'Won by 4 wickets',
      rcbScore: '180/6 (20.0)',
      opponentScore: '179/4 (20.0)',
      highlight: 'AB de Villiers 79* off 47 balls',
      imageKey: 'cricket-stadium-celebration-crowd'
    },
    {
      id: '2',
      opponent: 'vs Mumbai Indians', 
      date: 'May 10, 2015',
      venue: 'Wankhede Stadium',
      result: 'Won by 39 runs',
      rcbScore: '235/1 (20.0)',
      opponentScore: '196/7 (20.0)',
      highlight: 'Chris Gayle 117* off 57 balls',
      imageKey: 'cricket-batsman-celebration-boundary'
    },
    {
      id: '3',
      opponent: 'vs Sunrisers Hyderabad',
      date: 'May 17, 2016', 
      venue: 'M. Chinnaswamy Stadium',
      result: 'Won by 45 runs',
      rcbScore: '227/4 (20.0)',
      opponentScore: '182/6 (20.0)',
      highlight: 'Virat Kohli 109 off 55 balls',
      imageKey: 'cricket-century-celebration-player'
    },
    {
      id: '4',
      opponent: 'vs Kings XI Punjab',
      date: 'April 13, 2018',
      venue: 'Holkar Stadium',
      result: 'Won by 4 wickets',
      rcbScore: '207/6 (19.2)',
      opponentScore: '207/4 (20.0)',
      highlight: 'AB de Villiers 57* off 40 balls',
      imageKey: 'cricket-match-winning-moment'
    }
  ];

  const youtubeVideos = [
    {
      id: '1',
      title: 'Chris Gayle 175* vs PWI - Highest Individual Score',
      duration: '8:45',
      views: '15M',
      description: 'The Universe Boss smashes 175* off just 66 balls with 13 sixes',
      imageKey: 'cricket-gayle-batting-sixes'
    },
    {
      id: '2',
      title: 'AB de Villiers Superman Catches Compilation',
      duration: '12:30',
      views: '8.2M',
      description: 'Mr. 360 shows his fielding brilliance with impossible catches',
      imageKey: 'cricket-fielder-diving-catch'
    },
    {
      id: '3',
      title: 'Virat Kohli Century vs Gujarat Lions',
      duration: '6:15',
      views: '12M',
      description: 'King Kohli scores magnificent 100* in crucial IPL match',
      imageKey: 'cricket-kohli-century-celebration'
    },
    {
      id: '4',
      title: 'RCB Best Moments - Play Bold Highlights',
      duration: '15:20',
      views: '20M',
      description: 'Greatest RCB moments that define the Play Bold spirit',
      imageKey: 'cricket-team-celebration-trophy'
    },
    {
      id: '5',
      title: 'Maxwell 78 vs CSK - Match Winning Knock',
      duration: '7:30',
      views: '6.8M',
      description: 'Big Show delivers under pressure in must-win game',
      imageKey: 'cricket-maxwell-batting-celebration'
    },
    {
      id: '6',
      title: 'RCB vs MI - 49 all out lowest score defense',
      duration: '10:45',
      views: '5.5M',
      description: 'Incredible bowling performance defending lowest IPL total',
      imageKey: 'cricket-bowler-wicket-celebration'
    }
  ];
  // @end:data

  // @section:HomeScreen @depends:[ThemeContext,data,styles]
  const HomeScreen = function() {
    const themeContext = useTheme();
    const theme = themeContext.theme;

    return React.createElement(ScrollView, {
      style: { flex: 1, backgroundColor: theme.colors.background },
      contentContainerStyle: { paddingBottom: Platform.OS === 'web' ? 90 : 100 },
      componentId: 'home-scroll-view'
    },
      React.createElement(View, { style: styles.heroSection, componentId: 'home-hero-section' },
        React.createElement(Image, {
          source: { uri: 'IMAGE:rcb-royal-challengers-bengaluru-logo' },
          style: styles.logoImage,
          componentId: 'home-rcb-logo'
        }),
        React.createElement(Text, { 
          style: [styles.heroTitle, { color: theme.colors.primary }], 
          componentId: 'home-hero-title' 
        }, 'Play Bold'),
        React.createElement(Text, { 
          style: [styles.heroSubtitle, { color: theme.colors.textSecondary }], 
          componentId: 'home-hero-subtitle' 
        }, 'Royal Challengers Bengaluru')
      ),

      React.createElement(View, { style: styles.sectionContainer, componentId: 'home-quick-stats' },
        React.createElement(Text, { 
          style: [styles.sectionTitle, { color: theme.colors.textPrimary }], 
          componentId: 'home-stats-title' 
        }, 'Team Overview'),
        React.createElement(View, { style: styles.statsGrid, componentId: 'home-stats-grid' },
          React.createElement(View, { 
            style: [styles.statCard, { backgroundColor: theme.colors.card }], 
            componentId: 'home-stat-founded' 
          },
            React.createElement(Text, { 
              style: [styles.statNumber, { color: theme.colors.primary }], 
              componentId: 'home-founded-number' 
            }, '2008'),
            React.createElement(Text, { 
              style: [styles.statLabel, { color: theme.colors.textSecondary }], 
              componentId: 'home-founded-label' 
            }, 'Founded')
          ),
          React.createElement(View, { 
            style: [styles.statCard, { backgroundColor: theme.colors.card }], 
            componentId: 'home-stat-matches' 
          },
            React.createElement(Text, { 
              style: [styles.statNumber, { color: theme.colors.primary }], 
              componentId: 'home-matches-number' 
            }, '237'),
            React.createElement(Text, { 
              style: [styles.statLabel, { color: theme.colors.textSecondary }], 
              componentId: 'home-matches-label' 
            }, 'Matches')
          ),
          React.createElement(View, { 
            style: [styles.statCard, { backgroundColor: theme.colors.card }], 
            componentId: 'home-stat-finals' 
          },
            React.createElement(Text, { 
              style: [styles.statNumber, { color: theme.colors.primary }], 
              componentId: 'home-finals-number' 
            }, '3'),
            React.createElement(Text, { 
              style: [styles.statLabel, { color: theme.colors.textSecondary }], 
              componentId: 'home-finals-label' 
            }, 'Finals')
          )
        )
      ),

      React.createElement(View, { style: styles.sectionContainer, componentId: 'home-featured-players' },
        React.createElement(Text, { 
          style: [styles.sectionTitle, { color: theme.colors.textPrimary }], 
          componentId: 'home-players-title' 
        }, 'Star Players'),
        React.createElement(ScrollView, {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: { flexGrow: 0 },
          contentContainerStyle: { paddingHorizontal: 20 },
          componentId: 'home-players-scroll'
        },
          rcbPlayers.slice(0, 3).map(function(player) {
            return React.createElement(View, { 
              key: player.id,
              style: [styles.playerCard, { backgroundColor: theme.colors.card }], 
              componentId: 'home-player-' + player.id 
            },
              React.createElement(Image, {
                source: { uri: 'IMAGE:' + player.imageKey },
                style: styles.playerImage,
                componentId: 'home-player-image-' + player.id
              }),
              React.createElement(Text, { 
                style: [styles.playerName, { color: theme.colors.textPrimary }], 
                componentId: 'home-player-name-' + player.id 
              }, player.name),
              React.createElement(Text, { 
                style: [styles.playerRole, { color: theme.colors.textSecondary }], 
                componentId: 'home-player-role-' + player.id 
              }, player.role)
            );
          })
        )
      ),

      React.createElement(View, { style: styles.sectionContainer, componentId: 'home-recent-match' },
        React.createElement(Text, { 
          style: [styles.sectionTitle, { color: theme.colors.textPrimary }], 
          componentId: 'home-match-title' 
        }, 'Featured Victory'),
        React.createElement(View, { 
          style: [styles.matchCard, { backgroundColor: theme.colors.card }], 
          componentId: 'home-featured-match' 
        },
          React.createElement(Image, {
            source: { uri: 'IMAGE:' + famousMatches[0].imageKey },
            style: styles.matchImage,
            componentId: 'home-match-image'
          }),
          React.createElement(View, { style: styles.matchDetails, componentId: 'home-match-details' },
            React.createElement(Text, { 
              style: [styles.matchOpponent, { color: theme.colors.textPrimary }], 
              componentId: 'home-match-opponent' 
            }, famousMatches[0].opponent),
            React.createElement(Text, { 
              style: [styles.matchResult, { color: theme.colors.success }], 
              componentId: 'home-match-result' 
            }, famousMatches[0].result),
            React.createElement(Text, { 
              style: [styles.matchHighlight, { color: theme.colors.textSecondary }], 
              componentId: 'home-match-highlight' 
            }, famousMatches[0].highlight)
          )
        )
      )
    );
  };
  // @end:HomeScreen

  // @section:TeamScreen @depends:[ThemeContext,data,styles]
  const TeamScreen = function() {
    const themeContext = useTheme();
    const theme = themeContext.theme;
    const selectedPlayerState = useState(null);
    const selectedPlayer = selectedPlayerState[0];
    const setSelectedPlayer = selectedPlayerState[1];

    const renderPlayerModal = function() {
      if (!selectedPlayer) return null;
      
      return React.createElement(Modal, {
        visible: !!selectedPlayer,
        animationType: 'slide',
        transparent: true,
        onRequestClose: function() { setSelectedPlayer(null); }
      },
        React.createElement(View, { style: styles.modalOverlay, componentId: 'team-modal-overlay' },
          React.createElement(View, { 
            style: [styles.modalContent, { backgroundColor: theme.colors.card }], 
            componentId: 'team-modal-content' 
          },
            React.createElement(TouchableOpacity, {
              style: styles.modalCloseButton,
              onPress: function() { setSelectedPlayer(null); },
              componentId: 'team-modal-close'
            },
              React.createElement(MaterialIcons, { 
                name: 'close', 
                size: 24, 
                color: theme.colors.textSecondary 
              })
            ),
            React.createElement(Image, {
              source: { uri: 'IMAGE:' + selectedPlayer.imageKey },
              style: styles.modalPlayerImage,
              componentId: 'team-modal-player-image'
            }),
            React.createElement(Text, { 
              style: [styles.modalPlayerName, { color: theme.colors.textPrimary }], 
              componentId: 'team-modal-player-name' 
            }, selectedPlayer.name),
            React.createElement(Text, { 
              style: [styles.modalPlayerRole, { color: theme.colors.textSecondary }], 
              componentId: 'team-modal-player-role' 
            }, selectedPlayer.role),
            React.createElement(View, { style: styles.modalStatsContainer, componentId: 'team-modal-stats' },
              React.createElement(View, { style: styles.modalStatItem, componentId: 'team-modal-matches-stat' },
                React.createElement(Text, { 
                  style: [styles.modalStatNumber, { color: theme.colors.primary }], 
                  componentId: 'team-modal-matches-number' 
                }, selectedPlayer.matches.toString()),
                React.createElement(Text, { 
                  style: [styles.modalStatLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'team-modal-matches-label' 
                }, 'Matches')
              ),
              selectedPlayer.runs ? React.createElement(View, { style: styles.modalStatItem, componentId: 'team-modal-runs-stat' },
                React.createElement(Text, { 
                  style: [styles.modalStatNumber, { color: theme.colors.primary }], 
                  componentId: 'team-modal-runs-number' 
                }, selectedPlayer.runs.toString()),
                React.createElement(Text, { 
                  style: [styles.modalStatLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'team-modal-runs-label' 
                }, 'Runs')
              ) : null,
              selectedPlayer.wickets ? React.createElement(View, { style: styles.modalStatItem, componentId: 'team-modal-wickets-stat' },
                React.createElement(Text, { 
                  style: [styles.modalStatNumber, { color: theme.colors.primary }], 
                  componentId: 'team-modal-wickets-number' 
                }, selectedPlayer.wickets.toString()),
                React.createElement(Text, { 
                  style: [styles.modalStatLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'team-modal-wickets-label' 
                }, 'Wickets')
              ) : null,
              React.createElement(View, { style: styles.modalStatItem, componentId: 'team-modal-average-stat' },
                React.createElement(Text, { 
                  style: [styles.modalStatNumber, { color: theme.colors.primary }], 
                  componentId: 'team-modal-average-number' 
                }, selectedPlayer.average),
                React.createElement(Text, { 
                  style: [styles.modalStatLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'team-modal-average-label' 
                }, 'Average')
              )
            )
          )
        )
      );
    };

    return React.createElement(View, { 
      style: { flex: 1, backgroundColor: theme.colors.background }, 
      componentId: 'team-screen' 
    },
      React.createElement(ScrollView, {
        style: { flex: 1 },
        contentContainerStyle: { paddingBottom: Platform.OS === 'web' ? 90 : 100 },
        componentId: 'team-scroll-view'
      },
        React.createElement(View, { style: styles.screenHeader, componentId: 'team-header' },
          React.createElement(Text, { 
            style: [styles.screenTitle, { color: theme.colors.textPrimary }], 
            componentId: 'team-title' 
          }, 'Team Squad'),
          React.createElement(Text, { 
            style: [styles.screenSubtitle, { color: theme.colors.textSecondary }], 
            componentId: 'team-subtitle' 
          }, 'Royal Challengers Bengaluru')
        ),

        React.createElement(View, { style: styles.playersContainer, componentId: 'team-players-container' },
          rcbPlayers.map(function(player) {
            return React.createElement(TouchableOpacity, {
              key: player.id,
              style: [styles.teamPlayerCard, { backgroundColor: theme.colors.card }],
              onPress: function() { setSelectedPlayer(player); },
              componentId: 'team-player-card-' + player.id
            },
              React.createElement(Image, {
                source: { uri: 'IMAGE:' + player.imageKey },
                style: styles.teamPlayerImage,
                componentId: 'team-player-image-' + player.id
              }),
              React.createElement(View, { style: styles.teamPlayerInfo, componentId: 'team-player-info-' + player.id },
                React.createElement(Text, { 
                  style: [styles.teamPlayerName, { color: theme.colors.textPrimary }], 
                  componentId: 'team-player-name-' + player.id 
                }, player.name),
                React.createElement(Text, { 
                  style: [styles.teamPlayerRole, { color: theme.colors.textSecondary }], 
                  componentId: 'team-player-role-' + player.id 
                }, player.role),
                React.createElement(View, { style: styles.teamPlayerStats, componentId: 'team-player-stats-' + player.id },
                  React.createElement(Text, { 
                    style: [styles.teamPlayerStat, { color: theme.colors.primary }], 
                    componentId: 'team-player-matches-' + player.id 
                  }, player.matches + ' matches'),
                  player.runs ? React.createElement(Text, { 
                    style: [styles.teamPlayerStat, { color: theme.colors.primary }], 
                    componentId: 'team-player-runs-' + player.id 
                  }, player.runs + ' runs') : null,
                  player.wickets ? React.createElement(Text, { 
                    style: [styles.teamPlayerStat, { color: theme.colors.primary }], 
                    componentId: 'team-player-wickets-' + player.id 
                  }, player.wickets + ' wickets') : null
                )
              ),
              React.createElement(MaterialIcons, { 
                name: 'chevron-right', 
                size: 24, 
                color: theme.colors.textSecondary 
              })
            );
          })
        )
      ),
      renderPlayerModal()
    );
  };
  // @end:TeamScreen

  // @section:MatchesScreen @depends:[ThemeContext,data,styles]
  const MatchesScreen = function() {
    const themeContext = useTheme();
    const theme = themeContext.theme;
    const selectedMatchState = useState(null);
    const selectedMatch = selectedMatchState[0];
    const setSelectedMatch = selectedMatchState[1];

    const renderMatchModal = function() {
      if (!selectedMatch) return null;
      
      return React.createElement(Modal, {
        visible: !!selectedMatch,
        animationType: 'slide',
        transparent: true,
        onRequestClose: function() { setSelectedMatch(null); }
      },
        React.createElement(View, { style: styles.modalOverlay, componentId: 'matches-modal-overlay' },
          React.createElement(View, { 
            style: [styles.modalContent, { backgroundColor: theme.colors.card }], 
            componentId: 'matches-modal-content' 
          },
            React.createElement(TouchableOpacity, {
              style: styles.modalCloseButton,
              onPress: function() { setSelectedMatch(null); },
              componentId: 'matches-modal-close'
            },
              React.createElement(MaterialIcons, { 
                name: 'close', 
                size: 24, 
                color: theme.colors.textSecondary 
              })
            ),
            React.createElement(Image, {
              source: { uri: 'IMAGE:' + selectedMatch.imageKey },
              style: styles.modalMatchImage,
              componentId: 'matches-modal-image'
            }),
            React.createElement(Text, { 
              style: [styles.modalMatchTitle, { color: theme.colors.textPrimary }], 
              componentId: 'matches-modal-title' 
            }, 'RCB ' + selectedMatch.opponent),
            React.createElement(Text, { 
              style: [styles.modalMatchDate, { color: theme.colors.textSecondary }], 
              componentId: 'matches-modal-date' 
            }, selectedMatch.date + ' • ' + selectedMatch.venue),
            React.createElement(Text, { 
              style: [styles.modalMatchResult, { color: theme.colors.success }], 
              componentId: 'matches-modal-result' 
            }, selectedMatch.result),
            React.createElement(View, { style: styles.modalScoreContainer, componentId: 'matches-modal-scores' },
              React.createElement(View, { style: styles.modalScoreItem, componentId: 'matches-modal-rcb-score' },
                React.createElement(Text, { 
                  style: [styles.modalScoreLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'matches-modal-rcb-label' 
                }, 'RCB'),
                React.createElement(Text, { 
                  style: [styles.modalScoreValue, { color: theme.colors.primary }], 
                  componentId: 'matches-modal-rcb-value' 
                }, selectedMatch.rcbScore)
              ),
              React.createElement(View, { style: styles.modalScoreItem, componentId: 'matches-modal-opponent-score' },
                React.createElement(Text, { 
                  style: [styles.modalScoreLabel, { color: theme.colors.textSecondary }], 
                  componentId: 'matches-modal-opponent-label' 
                }, selectedMatch.opponent.replace('vs ', '')),
                React.createElement(Text, { 
                  style: [styles.modalScoreValue, { color: theme.colors.textPrimary }], 
                  componentId: 'matches-modal-opponent-value' 
                }, selectedMatch.opponentScore)
              )
            ),
            React.createElement(View, { style: styles.modalHighlightContainer, componentId: 'matches-modal-highlight' },
              React.createElement(Text, { 
                style: [styles.modalHighlightLabel, { color: theme.colors.textSecondary }], 
                componentId: 'matches-modal-highlight-label' 
              }, 'Match Highlight'),
              React.createElement(Text, { 
                style: [styles.modalHighlightText, { color: theme.colors.textPrimary }], 
                componentId: 'matches-modal-highlight-text' 
              }, selectedMatch.highlight)
            )
          )
        )
      );
    };

    return React.createElement(View, { 
      style: { flex: 1, backgroundColor: theme.colors.background }, 
      componentId: 'matches-screen' 
    },
      React.createElement(ScrollView, {
        style: { flex: 1 },
        contentContainerStyle: { paddingBottom: Platform.OS === 'web' ? 90 : 100 },
        componentId: 'matches-scroll-view'
      },
        React.createElement(View, { style: styles.screenHeader, componentId: 'matches-header' },
          React.createElement(Text, { 
            style: [styles.screenTitle, { color: theme.colors.textPrimary }], 
            componentId: 'matches-title' 
          }, 'Famous Victories'),
          React.createElement(Text, { 
            style: [styles.screenSubtitle, { color: theme.colors.textSecondary }], 
            componentId: 'matches-subtitle' 
          }, 'RCB\'s greatest wins with scorecards')
        ),

        React.createElement(View, { style: styles.matchesContainer, componentId: 'matches-container' },
          famousMatches.map(function(match) {
            return React.createElement(TouchableOpacity, {
              key: match.id,
              style: [styles.matchItem, { backgroundColor: theme.colors.card }],
              onPress: function() { setSelectedMatch(match); },
              componentId: 'match-item-' + match.id
            },
              React.createElement(Image, {
                source: { uri: 'IMAGE:' + match.imageKey },
                style: styles.matchItemImage,
                componentId: 'match-item-image-' + match.id
              }),
              React.createElement(View, { style: styles.matchItemContent, componentId: 'match-item-content-' + match.id },
                React.createElement(Text, { 
                  style: [styles.matchItemTitle, { color: theme.colors.textPrimary }], 
                  componentId: 'match-item-title-' + match.id 
                }, 'RCB ' + match.opponent),
                React.createElement(Text, { 
                  style: [styles.matchItemDate, { color: theme.colors.textSecondary }], 
                  componentId: 'match-item-date-' + match.id 
                }, match.date),
                React.createElement(Text, { 
                  style: [styles.matchItemResult, { color: theme.colors.success }], 
                  componentId: 'match-item-result-' + match.id 
                }, match.result),
                React.createElement(Text, { 
                  style: [styles.matchItemHighlight, { color: theme.colors.textSecondary }], 
                  componentId: 'match-item-highlight-' + match.id 
                }, match.highlight)
              ),
              React.createElement(MaterialIcons, { 
                name: 'chevron-right', 
                size: 24, 
                color: theme.colors.textSecondary 
              })
            );
          })
        )
      ),
      renderMatchModal()
    );
  };
  // @end:MatchesScreen

  // @section:VideosScreen @depends:[ThemeContext,data,styles]
  const VideosScreen = function() {
    const themeContext = useTheme();
    const theme = themeContext.theme;

    const handleVideoPress = function(video) {
      var message = 'Opening: ' + video.title;
      Platform.OS === 'web' ? window.alert(message) : Alert.alert('Play Video', message);
    };

    return React.createElement(ScrollView, {
      style: { flex: 1, backgroundColor: theme.colors.background },
      contentContainerStyle: { paddingBottom: Platform.OS === 'web' ? 90 : 100 },
      componentId: 'videos-scroll-view'
    },
      React.createElement(View, { style: styles.screenHeader, componentId: 'videos-header' },
        React.createElement(Text, { 
          style: [styles.screenTitle, { color: theme.colors.textPrimary }], 
          componentId: 'videos-title' 
        }, 'RCB Videos'),
        React.createElement(Text, { 
          style: [styles.screenSubtitle, { color: theme.colors.textSecondary }], 
          componentId: 'videos-subtitle' 
        }, 'Iconic moments and highlights')
      ),

      React.createElement(View, { style: styles.videosContainer, componentId: 'videos-container' },
        youtubeVideos.map(function(video) {
          return React.createElement(TouchableOpacity, {
            key: video.id,
            style: [styles.videoItem, { backgroundColor: theme.colors.card }],
            onPress: function() { handleVideoPress(video); },
            componentId: 'video-item-' + video.id
          },
            React.createElement(View, { style: styles.videoThumbnailContainer, componentId: 'video-thumbnail-' + video.id },
              React.createElement(Image, {
                source: { uri: 'IMAGE:' + video.imageKey },
                style: styles.videoThumbnail,
                componentId: 'video-thumbnail-image-' + video.id
              }),
              React.createElement(View, { style: styles.videoDurationBadge, componentId: 'video-duration-badge-' + video.id },
                React.createElement(Text, { 
                  style: styles.videoDurationText, 
                  componentId: 'video-duration-text-' + video.id 
                }, video.duration)
              ),
              React.createElement(View, { style: styles.videoPlayButton, componentId: 'video-play-button-' + video.id },
                React.createElement(MaterialIcons, { 
                  name: 'play-arrow', 
                  size: 32, 
                  color: '#FFFFFF' 
                })
              )
            ),
            React.createElement(View, { style: styles.videoContent, componentId: 'video-content-' + video.id },
              React.createElement(Text, { 
                style: [styles.videoTitle, { color: theme.colors.textPrimary }], 
                componentId: 'video-title-' + video.id 
              }, video.title),
              React.createElement(Text, { 
                style: [styles.videoViews, { color: theme.colors.textSecondary }], 
                componentId: 'video-views-' + video.id 
              }, video.views + ' views'),
              React.createElement(Text, { 
                style: [styles.videoDescription, { color: theme.colors.textSecondary }], 
                componentId: 'video-description-' + video.id 
              }, video.description)
            )
          );
        })
      )
    );
  };
  // @end:VideosScreen

  // @section:TabNavigator @depends:[HomeScreen,TeamScreen,MatchesScreen,VideosScreen,navigation-setup]
  const TabNavigator = function() {
    const themeContext = useTheme();
    const theme = themeContext.theme;

    return React.createElement(View, { 
      style: { flex: 1, width: '100%', height: '100%', overflow: 'hidden' }, 
      componentId: 'tab-navigator-container' 
    },
      React.createElement(Tab.Navigator, {
        screenOptions: {
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: theme.colors.card,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
            height: Platform.OS === 'web' ? 60 : 80,
            paddingBottom: Platform.OS === 'web' ? 10 : 20
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600'
          }
        }
      },
        React.createElement(Tab.Screen, {
          name: 'Home',
          component: HomeScreen,
          options: {
            tabBarIcon: function(props) {
              return React.createElement(MaterialIcons, {
                name: 'home',
                size: 24,
                color: props.color
              });
            }
          }
        }),
        React.createElement(Tab.Screen, {
          name: 'Team',
          component: TeamScreen,
          options: {
            tabBarIcon: function(props) {
              return React.createElement(MaterialIcons, {
                name: 'group',
                size: 24,
                color: props.color
              });
            }
          }
        }),
        React.createElement(Tab.Screen, {
          name: 'Matches',
          component: MatchesScreen,
          options: {
            tabBarIcon: function(props) {
              return React.createElement(MaterialIcons, {
                name: 'sports-cricket',
                size: 24,
                color: props.color
              });
            }
          }
        }),
        React.createElement(Tab.Screen, {
          name: 'Videos',
          component: VideosScreen,
          options: {
            tabBarIcon: function(props) {
              return React.createElement(MaterialIcons, {
                name: 'play-circle-outline',
                size: 24,
                color: props.color
              });
            }
          }
        })
      )
    );
  };
  // @end:TabNavigator

  // @section:styles @depends:[theme]
  const styles = StyleSheet.create({
    heroSection: {
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 30,
      paddingHorizontal: 20
    },
    logoImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 20
    },
    heroTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center'
    },
    heroSubtitle: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '500'
    },
    sectionContainer: {
      paddingHorizontal: 20,
      marginBottom: 30
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16
    },
    statsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    statCard: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginHorizontal: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    statNumber: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4
    },
    statLabel: {
      fontSize: 14,
      fontWeight: '500'
    },
    playerCard: {
      width: 160,
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      marginRight: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    playerImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 12
    },
    playerName: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 4
    },
    playerRole: {
      fontSize: 14,
      textAlign: 'center'
    },
    matchCard: {
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    matchImage: {
      width: '100%',
      height: 160
    },
    matchDetails: {
      padding: 16
    },
    matchOpponent: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4
    },
    matchResult: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8
    },
    matchHighlight: {
      fontSize: 14
    },
    screenHeader: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 30
    },
    screenTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8
    },
    screenSubtitle: {
      fontSize: 16
    },
    playersContainer: {
      paddingHorizontal: 20
    },
    teamPlayerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    teamPlayerImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 16
    },
    teamPlayerInfo: {
      flex: 1
    },
    teamPlayerName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4
    },
    teamPlayerRole: {
      fontSize: 14,
      marginBottom: 8
    },
    teamPlayerStats: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    teamPlayerStat: {
      fontSize: 12,
      fontWeight: '600',
      marginRight: 12
    },
    matchesContainer: {
      paddingHorizontal: 20
    },
    matchItem: {
      borderRadius: 12,
      marginBottom: 16,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    matchItemImage: {
      width: '100%',
      height: 140
    },
    matchItemContent: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    matchItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
      flex: 1
    },
    matchItemDate: {
      fontSize: 12,
      marginBottom: 4
    },
    matchItemResult: {
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 4
    },
    matchItemHighlight: {
      fontSize: 12
    },
    videosContainer: {
      paddingHorizontal: 20
    },
    videoItem: {
      borderRadius: 12,
      marginBottom: 20,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    videoThumbnailContainer: {
      position: 'relative'
    },
    videoThumbnail: {
      width: '100%',
      height: 200
    },
    videoDurationBadge: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4
    },
    videoDurationText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '600'
    },
    videoPlayButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -16 }, { translateY: -16 }],
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 20,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center'
    },
    videoContent: {
      padding: 16
    },
    videoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8
    },
    videoViews: {
      fontSize: 12,
      marginBottom: 8
    },
    videoDescription: {
      fontSize: 14,
      lineHeight: 20
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    modalContent: {
      width: '100%',
      maxWidth: 400,
      borderRadius: 16,
      padding: 20,
      maxHeight: '80%'
    },
    modalCloseButton: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 1
    },
    modalPlayerImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      alignSelf: 'center',
      marginBottom: 16
    },
    modalPlayerName: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8
    },
    modalPlayerRole: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 24
    },
    modalStatsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    modalStatItem: {
      alignItems: 'center',
      marginBottom: 16
    },
    modalStatNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4
    },
    modalStatLabel: {
      fontSize: 12,
      fontWeight: '500'
    },
    modalMatchImage: {
      width: '100%',
      height: 160,
      borderRadius: 8,
      marginBottom: 16
    },
    modalMatchTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8
    },
    modalMatchDate: {
      fontSize: 14,
      marginBottom: 12
    },
    modalMatchResult: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 20
    },
    modalScoreContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    modalScoreItem: {
      flex: 1,
      alignItems: 'center'
    },
    modalScoreLabel: {
      fontSize: 12,
      fontWeight: '500',
      marginBottom: 4
    },
    modalScoreValue: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    modalHighlightContainer: {
      marginTop: 8
    },
    modalHighlightLabel: {
      fontSize: 12,
      fontWeight: '500',
      marginBottom: 8
    },
    modalHighlightText: {
      fontSize: 14,
      fontStyle: 'italic'
    }
  });
  // @end:styles

  // @section:return @depends:[ThemeProvider,TabNavigator]
  return React.createElement(ThemeProvider, null,
    React.createElement(View, { style: { flex: 1, width: '100%', height: '100%' } },
      React.createElement(StatusBar, { barStyle: 'dark-content' }),
      React.createElement(TabNavigator)
    )
  );
  // @end:return
};
return ComponentFunctio
export default ComponentFunction;
