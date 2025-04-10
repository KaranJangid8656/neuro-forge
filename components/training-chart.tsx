"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface TrainingChartProps {
  data: { epoch: number; value: number; validationValue?: number }[]
  yLabel: string
  color: string
  validationColor: string
  showValidation: boolean
}

export function TrainingChart({ data, yLabel, color, validationColor, showValidation }: TrainingChartProps) {
  return (
    <div className="h-full w-full">
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p>No training data yet. Start training to see results.</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="epoch" label={{ value: "Epoch", position: "insideBottomRight", offset: -10 }} />
            <YAxis
              label={{ value: yLabel, angle: -90, position: "insideLeft" }}
              domain={yLabel === "Accuracy" ? [0, 1] : ["auto", "auto"]}
              tickFormatter={yLabel === "Accuracy" ? (value) => `${Math.round(value * 100)}%` : undefined}
            />
            <Tooltip
              formatter={(value: number) => (yLabel === "Accuracy" ? `${(value * 100).toFixed(2)}%` : value.toFixed(4))}
            />
            <Area type="monotone" dataKey="value" stroke={color} fill={color} fillOpacity={0.2} name="Training" />
            {showValidation && (
              <Area
                type="monotone"
                dataKey="validationValue"
                stroke={validationColor}
                fill={validationColor}
                fillOpacity={0.2}
                name="Validation"
              />
            )}
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

