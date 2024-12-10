import { View, Text  } from "react-native-web";
export function Score({score, maxScore}){
    const getScoreColor = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 40) return "bg-red-500";
        if (percentage < 98) return "bg-yellow-500";
        return "bg-green-500";
    };
    const className = getScoreColor(); 
    return (
        <View className={`${className} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    )

}
